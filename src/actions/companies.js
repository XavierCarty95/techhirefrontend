
export const  allCompanies = (companies) => {
    return {
        type: "DISPLAY_COMPANIES",
        payload: companies
        
    }
}

export const  addCompany = (company) => {
    return {
        type: "ADD_COMPANY",
        payload: company
        
    }
}

