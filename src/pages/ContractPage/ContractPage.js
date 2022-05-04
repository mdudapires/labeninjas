import { CircularProgress, MenuItem, Select, TextField } from "@material-ui/core";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { BASE_URL, headers } from "../../constants/urls";
import { Inputs, FiltersContainer, JobsListContainer, ScreenContainer } from "./styled";


const ContractPage = (props) => {
    const [jobsList, setJobsList] = useState([])
    const [searchFilter, setSearchFilter] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [sort, setSort] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    
    const getAllJobs = () => {
        axios.get(`${BASE_URL}/jobs`, headers)
            .then((res) => {
                setJobsList(res.data.jobs)
                setIsLoading(false)
            })
            .catch((err) => {
                alert(err.data.message)
                setIsLoading(false)
            })
    }

    const onChangeSearchFilter = (event) => {
        setSearchFilter(event.target.value);
    }

    const onChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
    }

    const onChangeMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    }

    const onChangeSort = (event) => {
        setSort(event.target.value);
    }

    const renderJobsList = jobsList
        .filter((job) => {
            return job.title.toLowerCase().includes(searchFilter.toLowerCase())
        })
        .filter((job) => {
            return minPrice === "" || job.price >= minPrice;
        })
        .filter((job) => {
            return maxPrice === "" || job.price <= maxPrice;
        })
        .sort((a, b) => {
            switch (sort) {
                case "ascending-price":
                    return a.price - b.price;
                case "descending-price":
                    return b.price - a.price;
                case "title":
                    return a.title.localeCompare(b.title);
                case "due-date":
                    return new Date(moment(b.dueDate)) < new Date(moment(a.dueDate));
                default:
                    return ""

            }
        })
        .map((job) => {
            return <ProductCard key={job.id} job={job} addToCart={props.addToCart} />
        })

    useEffect(() => {
        getAllJobs()
    }, [])


    return (
        <>
            {isLoading ? <ScreenContainer><CircularProgress></CircularProgress></ScreenContainer> : <ScreenContainer><FiltersContainer>
                <Inputs><TextField fullWidth variant="outlined" placeholder="Busca"  value={searchFilter} onChange={onChangeSearchFilter} /></Inputs>
                <Inputs><TextField variant="outlined" placeholder="Valor mínimo" type="number" value={minPrice} onChange={onChangeMinPrice} /></Inputs>
                <Inputs><TextField variant="outlined" placeholder="Valor máximo" type="number" value={maxPrice} onChange={onChangeMaxPrice} /></Inputs>
                <Select
                    value={sort}
                    onChange={onChangeSort}
                    displayEmpty
                    variant="outlined"
                    required
                >
                    <MenuItem value="" disabled>Ordenar por:</MenuItem>
                    <MenuItem value={"title"}>Título</MenuItem>
                    <MenuItem value={"ascending-price"}>Preço crescente</MenuItem>
                    <MenuItem value={"descending-price"}>Preço decrescente</MenuItem>
                    <MenuItem value={"due-date"}>Prazo</MenuItem>
                </Select>
            </FiltersContainer>
                <JobsListContainer>
                    {renderJobsList}
                </JobsListContainer></ScreenContainer>}

        </>
    )
}

export default ContractPage;