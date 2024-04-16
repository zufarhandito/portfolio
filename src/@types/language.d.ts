declare module "language" {
  type AppText = {
    TAKE_A_TOUR: string
    BIO_TITLE: string
    BIO_DESCRIPTION: string

    EXPERIENCE_TITLE: string
    EXPERIENCE_DESCRIPTION: string

    SKILLS_TITLE: string
    SKILLS_DESCRIPTION: string
  }

  type LanguageType = {
    id: string
    en: string
  }
}
