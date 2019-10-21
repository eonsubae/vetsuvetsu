const baseUrl: string = 
  process.env.NODE_ENV === "production"
    ? 'https://vetsuvetsu.now.sh'
    : 'http://localhost:3000';
    
export default baseUrl;