export const generateRandomToken = () => {
    let token = '';
    for (let i = 0; i < 4; i++) {
      token += Math.floor(Math.random() * 10);
    }
    return `YPLJ-2025-${token}`;
}

export const emailExists = async (email: string, link: string) => {
    
          fetch(`${link}/search?email=${email}`)
         .then(async(emailFetch) => {
                const isEmail = await emailFetch.json();
        if (isEmail.length > 0) {
            return 'email already registered';
        }
         } )
         .catch((err) => console.log(err))
    
 
};