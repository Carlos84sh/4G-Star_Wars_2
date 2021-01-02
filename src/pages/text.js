import { Context } from "../store/index.js";
import PropTypes from "prop-types"



export default function Text(props){

    if(props.name == "Luke Skywalker"){
        console.log(props.name)
        return "PAQUITOO";
    }else if(props.name == "C-3PO"){
        return "Lorem fistrum";
    }
        
}

Text.propTypes = { name: PropTypes.string };
