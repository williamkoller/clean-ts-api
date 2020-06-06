import { SurveyModel } from '@/domain/models/survey/survey'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<SurveyModel>
}
