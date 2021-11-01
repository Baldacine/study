import { Math } from './Math';

describe('Test Math library', () => {

    beforeEach(()=>{
        
    });

    it('Should sum two numbers correctly', () => {
        const response = Math.sum(5, 10);
        expect(response).toBe(15);
    });
    
    it('Should subtract two numbers correctly', () => {
        const response = Math.sub(4, 2);
        expect(response).toBe(2);
    });
    
    it('Should divide two numbers correctly', () => {
        const response = Math.div(15, 5);
        expect(response).toBe(3);

        const response2 = Math.div(3, 0);
        expect(response2).toBeFalsy();

    });
    
    it('Should multiply two numbers correctly', () => {
        const response = Math.mut(3, 5);
        expect(response).toBe(15);
    });

    it('How many lenght in string', () =>{
        const responde = 'wanderson';
        expect(responde).toHaveLength(9)
    });

    it('Check is Property e-mail', () =>{
        const responde = {
            name:'wanderson',
            email:'wandersonse0@gmail.com'
        };
        expect(responde).toHaveProperty('email');
    });


});

