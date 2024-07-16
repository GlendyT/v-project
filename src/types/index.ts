export type Citizen = {
    id: string
    name: string
}

export type DraftCitizen = Omit<Citizen, 'id'> 