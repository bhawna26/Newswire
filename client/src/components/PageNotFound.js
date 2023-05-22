import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { showToast } from './utils/ShowToasts';

const PageNotFound=()=>{
  const navigate = useNavigate();
	useEffect(
		() => {
			navigate('/');
			showToast('error', 'sorry, this page is not available');
		},
		[ navigate ]
	);
	return <React.Fragment />;
};
export default PageNotFound;