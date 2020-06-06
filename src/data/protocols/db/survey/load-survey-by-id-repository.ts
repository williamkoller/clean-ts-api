import { SurveyModel } from '@/domain/models/survey/survey'

export interface LoadSurveyByIdRepository {
  loadById: (id: string) => Promise<SurveyModel>
}
