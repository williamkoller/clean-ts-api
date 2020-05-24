import { AddSurveyParams } from '@/domain/usercases/survey/add-survey'

export interface AddSurveyRepository {
  add: (surveyData: AddSurveyParams) => Promise<void>
}
