import { SurveyResultModel, LoadSurveyResult, LoadSurveyResultRepository, LoadSurveyByIdRepository } from './db-load-survey-result-protocols'

export class DbLoadSurveyResult implements LoadSurveyResult {
  constructor (
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository,
    private readonly loadsurveyByIdRepository: LoadSurveyByIdRepository

  ) {}

  async load (surveyId: string): Promise<SurveyResultModel> {
    const surveyResult = await this.loadSurveyResultRepository.loadBySurveyId(surveyId)
    if (!surveyResult) {
      await this.loadsurveyByIdRepository.loadById(surveyId)
    }
    return surveyResult
  }
}
