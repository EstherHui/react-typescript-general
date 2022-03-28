type Greetdear = { //type is the keyword that set the datatype of Greetdear

    name : string //datatype of the variable
    messageCount ?: number//in here int = number so cannot use int here '?' is define that is optional not the compulsary
    isLoggedIn : boolean //verify is it the user login?
}

export const Greet = (dear : Greetdear) => { //dear : Greeydear is telling the system the structure and datatype of object we pass
    
    const{messageCount = 0} = dear

    return (
        <div>
             <h1>
             {
                dear.isLoggedIn
                ?`Hello ${dear.name} you have ${dear.messageCount} unread email ^^`  //if user login message display
                :`Welcome guest`//else not login
            }</h1>
        </div>
    )
    //name is the object we passing from App.tsx
// if use export const that only can import in APP with same class name
// if use export default can change the name when import
}