import { SaveSurveyResultRepository } from '@/data/protocols/db/survey/save-survey-result-repository'
import { SaveSurveyResultModel } from '@/domain/usercases/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'

export class SurveyResultMongoRepository implements SaveSurveyResultRepository {
  async save (data: SaveSurveyResultModel): Promise<SurveyResultModel> {
    const surveyResultCollection = await MongoHelper.getCollection('surveyResults')
    const res = await surveyResultCollection.findOneAndUpdate({
      surveyId: data.surveyId,
      accountId: data.accountId
    }, {
      $set: {
        answer: data.answer,
        date: data.date
      }
    }, {
      upsert: true,
      returnOriginal: false
    })
    return res.value && MongoHelper.map(res.value)
  }
}
