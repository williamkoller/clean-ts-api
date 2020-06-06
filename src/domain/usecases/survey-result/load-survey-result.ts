import { SurveyResultModel } from '@/domain/models/survey-result/survey-result'

export interface LoadSurveyResult {
  load: (surveyId: string) => Promise<SurveyResultModel>
}
