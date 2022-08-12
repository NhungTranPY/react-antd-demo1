import { Button, Modal } from 'antd';
import {useState} from 'react'

function AppWorks() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div id="works" className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>How it works</h2>
                    <p>Bladjd kjjf ee ffeefa ffflo iii fjjeif e eaaa ehhh</p>
                </div>
                <div className='contentHolder'>
                    <Button onClick={showModal}>
                        <i className='fas fa-play'></i>
                    </Button>
                </div>
                <Modal 
                    title="Natural" 
                    visible={isModalVisible} 
                    onCancel={handleCancel}
                    footer={null}
                >
                    <iframe title="YouTube video player" width="100%" height="350" src="https://www.youtube.com/embed/0I647GU3Jsc"></iframe>
                </Modal>
            </div>
        </div>
    )
}

export default AppWorks