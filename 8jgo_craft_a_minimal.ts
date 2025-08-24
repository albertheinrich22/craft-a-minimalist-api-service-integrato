/**
 * Craft a Minimalist API Service Integrator
 *
 * This project aims to create a lightweight, modular, and highly customizable API service integrator.
 * It enables developers to effortlessly integrate multiple API services into their applications,
 * handling authentication, request routing, and error handling in a unified manner.
 */

import { Injectable } from './injectable';

/**
 * ApiConfig interface
 */
interface ApiConfig {
  /**
   * API service name
   */
  name: string;

  /**
   * API service endpoint URL
   */
  endpoint: string;

  /**
   * API service authentication credentials
   */
  auth?: {
    username: string;
    password: string;
  };
}

/**
 * ApiService interface
 */
interface ApiService {
  /**
   * Perform a GET request to the API endpoint
   * @param path API endpoint path
   * @returns Promise resolving to the API response
   */
  get(path: string): Promise<any>;

  /**
   * Perform a POST request to the API endpoint
   * @param path API endpoint path
   * @param data Request body data
   * @returns Promise resolving to the API response
   */
  post(path: string, data: any): Promise<any>;

  /**
   * Perform a PUT request to the API endpoint
   * @param path API endpoint path
   * @param data Request body data
   * @returns Promise resolving to the API response
   */
  put(path: string, data: any): Promise<any>;

  /**
   * Perform a DELETE request to the API endpoint
   * @param path API endpoint path
   * @returns Promise resolving to the API response
   */
  delete(path: string): Promise<any>;
}

/**
 * Api Integrator class
 */
@Injectable()
class ApiIntegrator {
  private services: { [key: string]: ApiService } = {};

  /**
   * Register an API service
   * @param name API service name
   * @param config API service configuration
   */
  register(name: string, config: ApiConfig): void {
    this.services[name] = new ApiService(config);
  }

  /**
   * Get an API service instance
   * @param name API service name
   * @returns API service instance
   */
  getService(name: string): ApiService {
    return this.services[name];
  }
}

export { ApiConfig, ApiService, ApiIntegrator };