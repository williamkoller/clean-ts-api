import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { SurveyResultModel } from '@/domain/models/survey-result'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return await Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
