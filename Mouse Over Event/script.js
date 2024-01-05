let divCell = document.querySelector(".cell");

divCell.addEventListener("mouseenter",function(event){
      divCell.style.background = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX29vb39/f4+PjQ0NDb29tbW1toaGi1tbWFhYWKiopXV1dubm6tra28vLxVVVWenp5PT09hYWHHx8elpaXs7OxKSkp+fn6RkZHW1tbp6enCwsJ2dnawsLC3t7d4eHhEREQtHVirAAADsklEQVR4nO3WgXKiMBSFYRJEEbEqVNeq2Pd/ywVEW5Jg67bdOWX+O3Wmc01v+JojGFkz8opMNO5C+PsL4e+vm7C97Xzmvnpnjcht2V6uwxGal8nY6rkvtPvTf61Z9/q5qiamLyzmf0ZWse0Ll8dQnc/nYD+8+Diw2Jtybn+85efL2uCU8Oh6y6E3jgdHeHrKsqx5Xav5PUmcZldJdqfvvpP46+61H+pfm+61NKsrV/i6zjbHtFfn7TbZLFKvduttFuifAyPS+eJ1nUyPc7c9bdpnb8Zi26wObvnkzU7Tbd31L2S+aYa7Z7h8mqaruP8kiZNNujr4j5jJItmtls9uO15Pd2XhNO1yO53n3Wfi3ex8vZjne290lS3mZey1zWS62a0Kd8uXrO4evAuxq2b4JCB0RttWWLjfCYzthE7f1sK0LJz2Q0ITzcJC2wn7s00n9C7wIjTNwHtCYwfOsP6HhoTmEWE0cIYDQnNX6J3BJ4XRVeh+rzNfPUMznNJO6G95V+jU2xlG74XZV4UfnWGv/4HQrW8RDp+hv90/CfuFEKG8kM8hQn0hKUWoLySlCPWFpBShvpCUItQXklKE+kJSilBfSEoR6gtJKUJ9ISlFqC8kpQj1haQUob6QlCLUF5JShPpCUopQX0hKEeoLSSlCfSEpRagvJKUI9YWkFKG+kJQi1BeSUoT6QlKKUF9IShHqC0kpQn0hKUWoLySlCPWFpBShvpCUItQXklKE+kJSilBfSEoR6gtJKUJ9ISlFqC8kpQj1haQUob6QlCLUF5JShPpCUopQX0hKEeoLSSlCfSEpRagvJKUI9YWkFKG+kJQi1BeSUoT6QlKKUF9IShHqC0kpQn0hKUWoLySlCPWFpBShvpCUItQXklKE+kJSilBfSEoR6gtJKUJ9ISlFqC8kpQj1haQUob6QlCLUF5JShPpCUorwO4TmJnQk3yK0IaG5Cf0t7wm94feEti7T1UVYRG+dtmvtZNoK3X4t3JVFZPrdTmhsv98Jne5N6JS9Cvvdlyxphe7qoHC/Kk9VEe/fV1HWvUO/1/Xzmd8vVmXuLz+0g70Zy7q97Lebv1yWwdUDW8ZlaMf9vlrlp6UjNHGZl275nesb+eBbocUPtR8bM7C8ae9t/wwP6XxkVTjCaroYWR1se++6CfPXbV1PP1Lrnxl7mR0eXncr5wzj5sN1qqrZd1c78gfmXmbXg/3ZTXdWOXeaqHkKjKuusNvD1X3IjqXMaGXXQvj7a/RCYyL3a+vo6i82ZjKBsd9uFQAAAABJRU5ErkJggg==')"
});

divCell.addEventListener("mouseleave",function(event){
      divCell.style.background="";
});