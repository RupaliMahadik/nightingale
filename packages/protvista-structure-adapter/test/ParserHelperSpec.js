import {ParserHelper} from '../src/ParserHelper';

import {assert} from 'chai';
import {expect} from 'chai';


const properties = {
    method: 'X-ray',
    chains: 'B=287-344',
    resolution: '1.80 A'
};

describe('ParserHelper', () => {
    it('should capitalize first letter', () => {
        expect(ParserHelper.capitalizeFirstLetter('method')).to.equal('Method');
    });

    it('should get a description from properties', () => {
        const description = 'Method: X-ray. Chains: B=287-344. Resolution: 1.80 A. ';
        expect(ParserHelper.getDescription(properties)).to.equal(description);
    });

    it('should get a begin-end from a value', () => {
        const expectedBeginEnd = {begin: 287, end: 344};
        const beginEnd = ParserHelper.getBeginEnd(properties.chains);
        expect(beginEnd.begin).to.equal(expectedBeginEnd.begin);
        expect(beginEnd.end).to.equal(expectedBeginEnd.end);
    });

    it('should get a default begin-end from a value', () => {
        const expectedBeginEnd = {begin: 0, end: 0};
        const beginEnd = ParserHelper.getBeginEnd('');
        expect(beginEnd.begin).to.equal(expectedBeginEnd.begin);
        expect(beginEnd.end).to.equal(expectedBeginEnd.end);
    });
});