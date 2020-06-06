import { SurveyResultModel } from '@/domain/models/survey-result/survey-result'

export interface LoadSurveyResultRepository {
  loadBySurveyId: (surveyId: string) => Promise<SurveyResultModel>
}
