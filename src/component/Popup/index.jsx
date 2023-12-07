import React from 'react'
import Modals from '../Modals'
import ModalBody from '../Modals/ModalsBody'
import './style.scss'

const PopUp = ({ openpopup, onclose, Data, setData }) => {

    const closeModal = () => {
        onclose();
        setData([])
    }
    return (
        <Modals className="Service_modal" ref={openpopup} Position="center" slide="top" ClosePopUp={() => closeModal()} ModalsSize={'modal-l'}>
            <ModalBody className={'Service_pop_body'}>
                {
                    Data ? Data.map((item, key) => {
                        return (
                            <div className='service_wrap' key={key}>
                                <figure className='image_wrap'>
                                    <img src={item.img} alt="img" />
                                </figure>

                                <h3 className='tittle_heading'>{item.about}</h3>
                                <p className='tittle_para'>{item.tittle}</p>

                            </div>
                        )
                    }) : ""
                }

            </ModalBody>
        </Modals>
    )
}

export default PopUp