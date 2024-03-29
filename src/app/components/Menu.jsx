function Menu() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://www.w3schools.com/w3css/4/w3.css"
      ></link>

      <div class="w3-top">
        <div class="w3-row w3-padding w3-black">
          <div class="w3-col s3">
            <a href="#" class="w3-button w3-block w3-black">
              HOME
            </a>
          </div>
          <div class="w3-col s3">
            <a href="#about" class="w3-button w3-block w3-black">
              ABOUT
            </a>
          </div>
          <div class="w3-col s3">
            <a href="#menu" class="w3-button w3-block w3-black">
              MENU
            </a>
          </div>
          <div class="w3-col s3">
            <a href="#where" class="w3-button w3-block w3-black">
              WHERE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
