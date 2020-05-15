import { AddSurveyModel } from '../../../../domain/usercases/survey/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyModel): Promise<void>
}
