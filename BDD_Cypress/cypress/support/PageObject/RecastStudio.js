let url = 'https://app.recast.studio/auth/login/?ref=header-login'

class RecastStudio{

    getUrl(){
        return cy.visit(url)
    }

    getUsername(){
        return cy.get('#login-form_email')
    }

    getPassword(){
        return cy.get('#login-form_password')
    }

    getLoginBtn(){
        return cy.get('button[type="submit"]')
    }

    getCredentials(){
        cy.get('#login-form_email')
        cy.get('#login-form_password')
    }
}

export default RecastStudio;