const expect = require('expect');
const expectJsx = require('expect-jsx');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const Facilities = require('./facilities');
const data = require('../../dummyData.json');

expect.extend(expectJsx);

describe('Facilities Component', () => {
    const facilities = data.facilities;
    const renderer = TestUtils.createRenderer();
    
    describe('rendered correctly', () => {
        function getRenderedDOM (facilities) {
            renderer.render(<Facilities data={facilities} />);
            return renderer.getRenderOutput();
        }
        
        it('should include a list item', () => {
            const actual = getRenderedDOM(facilities);
            const expected = (
                <li className="facilities__list__item"><i className={facilities[0].class}></i>{facilities[0].name}</li>
            );
            expect(actual).toIncludeJSX(expected);
        });

        it('should not include [View all Facilities] if facilities <= maxFacilitiesToShow', () => {
            const actual = getRenderedDOM(facilities.slice(0, 5));
            expect(actual).toNotIncludeJSX(<li className="facilities__list__all" data-toggle="modal" data-target="#facilitiesModal">View all Facilities</li>);
        });
    });
    
});