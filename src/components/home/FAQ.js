import { Collapse, Button } from 'antd';
const { Panel } = Collapse;

function AppFQA() {
    return (
        <div id="faq" className='block faqBlock'>
            <div className='container-fuild'>
                <div className='titleHolder'>
                    <h2>FAQ</h2>
                    <p>Ghdirywts fhfhhf louwn jjhstw kllkiiw eerbbh kkiuygv</p>
                </div>
                <Collapse defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                    <p>collapse</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>collapse</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>collapse</p>
                </Panel>
                </Collapse>
                <div className='quickSupport'>
                    <h3>Want quick question?</h3>
                    <p>If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.</p>
                    <Button type="primary" size="large"><i className='fas fa-envelope'></i>Email your question</Button>
                </div>
            </div>
        </div>
    )
}

export default AppFQA