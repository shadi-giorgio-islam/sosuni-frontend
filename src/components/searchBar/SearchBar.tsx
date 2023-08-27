import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './SearchBar.css';
import {Link} from "react-router-dom";
import Article from "../article/entity/Article";
import {generateRandomArticles} from "../article/function/GenerateArticles";
import {ListItem} from "@mui/material";

const style = {
    "& label.Mui-focused": {
        color: "#AC3B61"
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#AC3B61"
        }
    }
}

export default function SearchBar() {

    return (
        <Autocomplete
            className="searchBar"
            options={articles}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
                <TextField {...params} label="Cerca la tua università" margin="normal" sx={style}/>
            )}
            renderOption={(props, option) => (
                <ListItem >
                    <Link to={`/article/${option.id}`}>
                        {option.title}
                    </Link>
                </ListItem>
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const articles: Article[] = generateRandomArticles(50);
