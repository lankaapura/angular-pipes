import { ReplacePipe } from '../../index';
        
import {describe, it, beforeEach, expect} from 'angular2/testing';

describe('ReplacePipe', () => {
    
    let pipe: ReplacePipe;
    
    beforeEach(() => {
       pipe = new ReplacePipe(); 
    });
    
    
    it('Should return the replaced string', () => {
       
        const result = pipe.transform('aaa', ['aaa', 'bbb']);
        expect(result).toEqual('bbb');
    });
    
    
    it('Should return the replaced string #2', () => {
       
        const result = pipe.transform('aaa', [/a/g, 'b']);
        expect(result).toEqual('bbb');
    });
    
    
    it('Should return the replaced string #3', () => {
       
        const result = pipe.transform('abcdeabcde', [/a/g, 'f']);
        expect(result).toEqual('fbcdefbcde');
    });
    
    // Just use replace function ...
    
    it ('Should throw an error', () => {
       
       expect(() => {
           pipe.transform('a')
       }).toThrowError(Error)
        
    });
   
});