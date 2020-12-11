const initialState = {
    rg:'',
    cpf:'',
    ctps:'',
    phone:'',
    address:'',
    fullname:'',
    escschooling:'',
    fullnameMother:''
}

const newReducer = (state = initialState, action)=>{
    
    switch(action.type){
     
        case 'SET_USER':
            return{...state,
                rg:action.payload.rg,
                cpf:action.payload.cpf,
                ctps:action.payload.ctps,
                phone:action.payload.phone,
                address:action.payload.address,
                fullname:action.payload.address,
                escschooling:action.payload.escschooling,
                fullnameMother:action.payload.fullnameMother
           
            }
    
            break;
        }
    
        return state; 
    }
export default newReducer;