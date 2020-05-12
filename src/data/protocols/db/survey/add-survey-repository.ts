import { AddSurveyModel } from '../../../../domain/usercases/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyModel): Promise<void>
}
