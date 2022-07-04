import axios from 'axios';
import configSystem from './configSystem'

// const API_URL_PRODUCT = 'http://localhost:8090/product';

class ProductService {
    getAllProducts() {
        return axios.get(configSystem.API_URL_PRODUCT + 'product/products')
    }

    getProduct(id) {
        return axios.get(configSystem.API_URL_PRODUCT + `/${id}`)
    }

    getCategories() {
        return axios.get(configSystem.API_URL_PRODUCT + 'category/categories')
    }

}

export default new ProductService()
