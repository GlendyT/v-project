export type Citizen = {
    id: string
    name: string
    date: Date
}


export type DraftCitizen = Omit<Citizen, 'id'> 

export type Cities = {
    id: number
    name: string
    image: string
}