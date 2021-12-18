import React, {useState} from "react";
import styles from "./GuideProfile.module.css";
import close from "../../../images/close.svg";
import messenger from '../../../images/messenger.png';
import phone_call from '../../../images/phone-call.png';
import {useHistory} from "react-router-dom";
import {PATH_LIST_EVENTS} from "../../../config/config_navigation";
import {AiOutlineEdit, AiOutlineSave} from "react-icons/all";
import store from "../../../store/store";
import {logout} from "../../../actions/authAction";
import { Container } from "../../styles/ContainerStyles";

const GuideProfile = () => {

    const history = useHistory();
    const [isEdit, setIsEdit] = useState({
        name: false,
        description: false,
        footer_title: false,
        contact_title: false
    });
    const [user, setUser] = useState({...store.getState().auth.user});
    const [userName, setUserName] = useState(user.firstName + " " + user.lastName);
    const cities = user.cities;

    console.log(user.firstName + "&" + user.lastName)
    const cityItem = cities.length !== 0 ? cities.map(city => {
        return <li key={city}>{city}</li>
    }) : "";


    const closeGuideProfile = () => {
        history.push(PATH_LIST_EVENTS);
    }

    const onChangeLogout = () => {
        store.dispatch(logout());
        history.push(PATH_LIST_EVENTS);
    }

    const setNewUserData = (event) => {
        event.preventDefault();
        let name = event.target.name;
        switch (name){
            case "name":
                setUserName(event.target.value);
                break;
            case "description":
                setUser({...user, description: event.target.value});
                break;
            default:
                break
        }
    }

    const saveNewUserData = () => {
        if(isEdit.name === true){
            let nameTemp = userName.split(" ");
            setUser({...user, firstName: nameTemp[0], lastName: nameTemp[1]});
        }
        setIsEdit({
            name: false,
            description: false,
            footer_title: false,
            contact_title: false
        })
    }

    const onSubmit = (event)  => {
        event.preventDefault();
    }




    return <React.Fragment>
        <Container>
            <button onClick={closeGuideProfile} className={styles.button_close}>
                <img src={close} alt=""/>
            </button>
            <div className={styles.profile_wrapper}>

                    <div  className={styles.profile_left}>
                        <div className={styles.profile_left_avatar}>
                            <img src={user.image} alt=""/>
                        </div>
                    </div>

                    <div className={styles.profile_right}>
                        <form onSubmit={onSubmit} noValidate>
                            <div className={styles.profile_right_header}>
                                <div className={styles.profile_name}>
                                    <textarea cols={userName.length} onChange={setNewUserData} value={userName} name="name" style={!isEdit.name === false ? {color: "#707070"} : {color: "#2B2D2F"}} readOnly={!isEdit.name}/>
                                    {isEdit.name === false ?
                                        <button className={styles.profile_icon_edit} onClick={()=> setIsEdit({...isEdit, name: !isEdit.name})}>
                                            <AiOutlineEdit/>
                                        </button> :
                                        <button onClick={saveNewUserData} className={styles.profile_icon_edit}>
                                            <AiOutlineSave/>
                                        </button>
                                    }
                                </div>
                                <p className={styles.profile_license}>{user.licenseNumber}</p>
                            </div>
                            <div className={styles.profile_right_body}>
                                <div className={styles.profile_body_description_wrapper}>
                                    <h2 className={styles.profile_body_description_title}>Кто я</h2>
                                    {isEdit.description === false ?
                                        <button className={styles.profile_icon_edit} onClick={()=> setIsEdit({...isEdit, description: !isEdit.description})}>
                                            <AiOutlineEdit/>
                                        </button> :
                                        <button onClick={saveNewUserData} className={styles.profile_icon_edit}>
                                            <AiOutlineSave/>
                                        </button>
                                    }
                                </div>
                                <textarea onChange={setNewUserData} className={styles.profile_body_description_subtitle} value={user.description} name="description" style={!isEdit.description === false ? {color: "#707070"} : {color: "#2B2D2F"}} readOnly={!isEdit.description}/>
                            </div>
                            <div className={styles.profile_right_footer}>
                                <div className={styles.profile_footer_description_wrapper}>
                                    <span className={styles.profile_footer_description_title}>Я могу</span>
                                    <button className={styles.profile_icon_edit} onClick={()=> setIsEdit({...isEdit, footer_title: !isEdit.footer_title})}><AiOutlineEdit/></button>
                                </div>
                                <p className={styles.profile_footer_description_subtitle}>
                                    Также в индивидуальном порядке могу провести экскурсии по следующим городам:
                                </p>
                                <ul>
                                    {cityItem}
                                </ul>
                            </div>
                            <div className={styles.profile_right_contact}>
                                <div className={styles.profile_contact_description_wrapper}>
                                    <span className={styles.profile_contact_description_title}>Связаться со мной</span>
                                    <button className={styles.profile_icon_edit} onClick={()=> setIsEdit({...isEdit, contact_title: !isEdit.contact_title})}><AiOutlineEdit/></button>
                                </div>
                                Телефон:
                                <textarea  className={styles.profile_contact_description_phone} value={user.phoneNumber1} style={!isEdit.contact_title === false ? {color: "#707070"} : {color: "#2B2D2F"}}  readOnly={!isEdit.contact_title}/>
                                <p className={styles.profile_contact_description_social}>
                                    Соцсети и мессенджеры
                                </p>
                                <div className={styles.profile_contact_description_social_icons}>
                                    <a href="https://www.facebook.com" className={styles.profile_contact_description_social_icon}>
                                        <img src={messenger} alt=""/>
                                    </a>
                                    <a href="https://www.whatsapp.com" className={styles.profile_contact_description_social_icon}>
                                        <img src={phone_call} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </form>
                        <button className={styles.logout_button} onClick={onChangeLogout}>SignOut</button>
                    </div>

            </div>
        </Container>
    </React.Fragment>
}


export default GuideProfile;
