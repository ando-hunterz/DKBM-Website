# Website DKBM UMN GEN X
Static Website made for DKBM UMN GEN X. Built With HTML, CSS and JS.

## How to Use 🛠
### Using Command Line 💻
- Clone project using command
```bash
cd 'to your preferred directory'
git clone https://github.com/ando-hunterz/DKBM-Website.git
```
- Open index.html using your favorite browser
### Using ZIP on Server 🖥
- Download 'WebsiteDKBM.zip'
- FTP to your server
- Extract 'WebsiteDKBM.zip' 
- Visit server IP or domain to access the website

## Using Docker (Preffered Way) 📌
- Build docker image with command
  ```bash
  docker build . -t dkbm-website
  ```
- Run `dkbm-website` docker image
  ```bash
  docker run -d -p 8080:80 --name dkbm-website dkbm-website
  ```
- Visit `localhost:8080` on browser to access the website
- Stop and clean container with command
  ```bash
  docker container stop dkbm-website && docker container rm dkbm-website
  ```

