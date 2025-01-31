<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <link rel="stylesheet" href="bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/dashboard.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <style>
        .nav-pills .nav-link.active,
        .nav-pills .show>.nav-link {
            color: black;
            background-color: transparent;
        }

        .nav-pills .nav-link {
            background: 0 0;
            border: 0;
            padding-left: 0;
            border-radius: .25rem;
        }

        .form-control:focus {
            color: #212529;
            background-color: #fff;
            border: 0.5px solid rgb(110, 87, 87);
            outline: 0;
            box-shadow: 0 0 0 white !important;
        }

        .form-switch .form-check-input {
            width: 2.5em;
            /* margin-left: -2.5em; */
            height: 1.5em;
            background-position: left center;
            border-radius: 2em;
            transition: background-position .15s ease-in-out;
        }
        @media (max-width: 768px) {
            #myTab {
                display: none;
            }
        }

        @media screen and (max-width:990px) {
            .side-tab{
                padding-top: 5px;
                padding-bottom: 3px;
            }
        }
        @media (min-width: 990px) {
            .side-tab {
                display: block !important;
            }
        }

        .food{
            font-size: 15px;
            font-weight: bold;
        }

        .tab-content{
            padding: 0;
        }
        .pagination{
            margin-bottom: 0px;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0066a7;">
        <div class="container-fluid">
            <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"
                aria-controls="sidebar">
                <img src="pizzashop_images/images/icons8-menu-64.png" alt="" style="height: 30px;">
            </button>
            <a class="navbar-brand ms-3" href="#"><img src="pizzashop_images/images/Default_pfp.svg.png" alt=""
                    style="width: 40px; height: 40px;"></a>
        </div>
    </nav>

    <div class="offcanvas offcanvas-start bg-light" style="width: 233px;" tabindex="-1" id="sidebar">
        <div class="offcanvas-header">
            <img src="pizzashop_images/images/logos/pizzashop_logo.png" alt="" style="width: 50px; height: 40px;">
            <h5 class="offcanvas-title">PIZZASHOP</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul class="nav flex-column">
                <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
                <li class="nav-item"><a class="nav-link active" href="#">Users</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Role and Permission</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Menu</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Table and Section</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Taxes and Fees</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Orders</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Customers</a></li>
            </ul>
        </div>
    </div>

    <div class="" id="main-content">
        <div class="container-fluid d-flex align-items-center head-top" style="justify-content: space-between;">
            <p class="headings fw-bold" style=" font-size: 30px;">Permissions</p>
        </div>
        <div class="box">
            <div class="" id="main-content" style="margin: 0;">
                <ul class="nav nav-tabs d-flex" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">Items</button> 
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false">Modifiers</button>
                    </li>
                </ul>
                <div class="tab-content w-100" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div class="d-flex align-items-start row">
                            <div class=" side-tab col-lg-3 ">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <button class="btn btn-primary d-lg-none" onclick="toggleTabs()" style="background: transparent;"><img src="pizzashop_images/images/icons8-menu-64.png" style="height: 30px;" alt=""></button> <!--- df --->
                                    <div class="fs-4 fw-semibold" style="color: #0066a7;">Category</div>
                                    <!-- <button class="d-flex align-items-center justify-content-center"
                                        style="border: 1px solid #0066a7; background-color: transparent; height: 22px; width: 22px;"><i
                                            class="bi bi-plus-lg" style="color: #0066a7;"></i></button> -->
                                    <a href="#" class="delete-icon" title="Delete">
                                        <div class="modal fade" id="exampleModalToggle" aria-hidden="true"
                                            aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel"
                                                            style="color: black;">Add Category</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body ">
                                                        <div>
                                                            <div class="form-floating mb-3">
                                                                <input type="text" class="form-control"
                                                                    id="floatingInput" placeholder="Name">
                                                                <label for="floatingInput"
                                                                    style="color: black;">Name</label>
                                                            </div>
                                                            <div class="form-floating mb-3">
                                                                <input type="text" class="form-control"
                                                                    id="floatingInput" placeholder="Description">
                                                                <label for="floatingInput"
                                                                    style="color: black;">Description</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer justify-content-end d-flex">
                                                        <button class="btn btn-primary" data-bs-target=""
                                                            data-bs-toggle="">Save</button>
                                                        <button class="btn btn-outline-primary"
                                                            style="background-color: transparent; color: #0066a7;">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"
                                            style="border: 1px  solid #0066a7;"><i class="bi bi-plus-lg"
                                                style="color: #0066a7; "></i></button>
                                        <!-- <button class="d-flex align-items-center justify-content-center" data-bs-toggle="modal"
                                        style="border: 1px solid #0066a7; background-color: transparent; height: 22px; width: 22px;"><i
                                            class="bi bi-plus-lg" style="color: #0066a7;"></i></button> -->
                                    </a>
                                </div>
                                <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                    aria-orientation="vertical" style=" background-color: #f6f6f6;">
                                    <a href="" class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><img src="pizzashop_images/images/grid-3x2-gap-fill.svg"
                                            class="m-2" alt="" style="rotate: 90deg;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Sandwich</p>
                                    </a>
                                    <a href="" class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><img src="pizzashop_images/images/grid-3x2-gap-fill.svg"
                                            class="m-2" alt="" style="rotate: 90deg;  color: black;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Pasta</p>
                                    </a>
                                    <a href="" class="nav-link" id="v-pills-settings-tabv-pills-profile-tab"
                                        data-bs-toggle="pill" data-bs-target="#v-pills-profile" role="tab"
                                        aria-controls="v-pills-profile" aria-selected="false"><img
                                            src="pizzashop_images/images/grid-3x2-gap-fill.svg" class="m-2" alt=""
                                            style="rotate: 90deg; color: black;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Sizes And
                                            Appetizers</p>
                                    </a>
                                    <a href="" class="nav-link" id="v-pills-salad-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><img src="pizzashop_images/images/grid-3x2-gap-fill.svg"
                                            class="m-2" alt="" style="rotate: 90deg;color: black;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Salads</p>
                                    </a>
                                    <a href="" class="nav-link" id="v-pills-dips-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><img src="pizzashop_images/images/grid-3x2-gap-fill.svg"
                                            class="m-2" alt="" style="rotate: 90deg;color: black;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Dips And
                                            Souces
                                        </p>
                                    </a>
                                    <a href="" class="nav-link" id="v-pills-pizza-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><img src="pizzashop_images/images/grid-3x2-gap-fill.svg"
                                            class="m-2" alt="" style="rotate: 90deg; color: black;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Pizza</p>
                                    </a>
                                    <a href="" class="nav-link" id="v-pills-desert-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" role="tab" aria-controls="v-pills-profile"
                                        aria-selected="false"><img src="pizzashop_images/images/grid-3x2-gap-fill.svg"
                                            class="m-2" alt="" style="rotate: 90deg; color: black;">
                                        <p class="d-inline food" style="text-wrap: wrap; color: black;">Desert</p>
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="">
                                <div>Items</div>
                                <div>
                                    <div class="form-group has-search"
                                        style="display: flex; justify-content: end">
                                        <div class="search-container right-icon">
                                            <input type="text" class="search-input" placeholder="Search...">
                                            <div class="search-icon"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="tab-content bg-light col-lg-9" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                    aria-labelledby="v-pills-home-tab" style="justify-content: space-between;">
                                    <div>
                                        <div class="fs-4 fw-semibold pt-2 ps-3">Items</div>
                                        <div>
                                            <div class="form-group has-search mb-3"
                                                style="display: flex; justify-content: end">
                                                <div class="search-container right-icon">
                                                    <input type="text" class="search-input" placeholder="Search...">
                                                    <div class="search-icon"></div>
                                                </div>
                                                <button class="btn mx-2"
                                                    style="background-color: transparent; border: 1px solid black;"><img
                                                        src="pizzashop_images/images/trash.svg" alt=""></button>
                                                <button class="btn" style="color: white;">+New Item</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table-responsive">
                                        <table class="table" style="border-top: none;">
                                            <thead>
                                                <tr>
                                                    <th scope="col" style="width: 40px; border-top: none;"><input
                                                            class="form-check-input" type="checkbox" value=""
                                                            id="flexCheckDefault"></th>
                                                    </th>
                                                    <th scope="col" style="border-top: none;">Name</th>
                                                    <th scope="col" style="border-top: none;" class="text-center">Item
                                                        Type</th>
                                                    <th scope="col" style="border-top: none;" class="text-center">Rate
                                                    </th>
                                                    <th scope="col" style="border-top: none;" class="text-center">
                                                        Quantity</th>
                                                    <th scope="col" style="border-top: none; width: 12px;">Available
                                                    </th>
                                                    <th scope="col" style="border-top: none;" class="text-center">Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row"><input class="form-check-input" type="checkbox"
                                                            value="" id="flexCheckDefault"></th>
                                                    <td><img src="pizzashop_images/images/dining-menu.png" class="me-2"
                                                            style="width: 40px; height: 40px;" alt="">Punjabi Tadka
                                                        Sandwich</td>
                                                    <td class="text-center align-content-center justify-content-center"> <img
                                                            src="pizzashop_images/images/icons/non-veg-icon.svg"
                                                            style="width: 25px;" alt="">
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        200
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        1
                                                    </td>
                                                    <td class=" align-content-center justify-content-center">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="flexSwitchCheckDefault">
                                                        </div>
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        <a href="" class="edit-icon" title="Edit"><i
                                                                class="fas fa-pencil-alt pe-2"></i></a>
                                                        <a href=""><i class="fas fa-trash-alt "
                                                                style="color: black;"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input class="form-check-input" type="checkbox"
                                                            value="" id="flexCheckDefault"></th>
                                                    <td><img src="pizzashop_images/images/dining-menu.png" class="me-2"
                                                            style="width: 40px; height: 40px;" alt="">Chicken Sandwich
                                                    </td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <img src="pizzashop_images/images/icons/non-veg-icon.svg"
                                                            style="width: 25px;" alt="">
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        200
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        1
                                                    </td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="flexSwitchCheckDefault">
                                                        </div>
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        <a href="" class="edit-icon" title="Edit"><i
                                                                class="fas fa-pencil-alt pe-2"></i></a>
                                                        <a href=""><i class="fas fa-trash-alt "
                                                                style="color: black;"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input class="form-check-input" type="checkbox"
                                                            value="" id="flexCheckDefault"></th>
                                                    <td><img src="pizzashop_images/images/dining-menu.png" class="me-2"
                                                            style="width: 40px; height: 40px;" alt="">Cheese Sandwich
                                                    </td>
                                                    <td class=" text-center align-content-center justify-content-center">
                                                        <img src="pizzashop_images/images/icons/veg-icon.svg"
                                                            style="width: 25px;" alt="">
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        200
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        1
                                                    </td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="flexSwitchCheckDefault">
                                                        </div>
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        <a href="" class="edit-icon" title="Edit"><i
                                                                class="fas fa-pencil-alt pe-2"></i></a>
                                                        <a href=""><i class="fas fa-trash-alt "
                                                                style="color: black;"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input class="form-check-input" type="checkbox"
                                                            value="" id="flexCheckDefault"></th>
                                                    <td><img src="pizzashop_images/images/dining-menu.png" class="me-2"
                                                            style="width: 40px; height: 40px;" alt="">Aloo Sandwich</td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <img src="pizzashop_images/images/icons/veg-icon.svg"
                                                            style="width: 25px;" alt="">
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        200
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        1
                                                    </td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="flexSwitchCheckDefault">
                                                        </div>
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        <a href="" class="edit-icon" title="Edit"><i
                                                                class="fas fa-pencil-alt pe-2"></i></a>
                                                        <a href=""><i class="fas fa-trash-alt "
                                                                style="color: black;"></i></a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><input class="form-check-input" type="checkbox"
                                                            value="" id="flexCheckDefault"></th>
                                                    <td><img src="pizzashop_images/images/dining-menu.png" class="me-2"
                                                            style="width: 40px; height: 40px;" alt="">Black Bean
                                                        Sandwich</td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <img src="pizzashop_images/images/icons/veg-icon.svg"
                                                            style="width: 25px;" alt="">
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        150
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        1
                                                    </td>
                                                    <td class="text-center align-content-center justify-content-center">
                                                        <div class="form-check form-switch">
                                                            <input class="form-check-input" type="checkbox"
                                                                role="switch" id="flexSwitchCheckDefault">
                                                        </div>
                                                    </td>
                                                    <td class="text-center align-content-center">
                                                        <a href="" class="edit-icon" title="Edit"><i
                                                                class="fas fa-pencil-alt pe-2"></i></a>
                                                        <a href=""><i class="fas fa-trash-alt "
                                                                style="color: black;"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination justify-content-end">
                                            <li class="d-flex align-items-center pe-3">Item per page</li>
                                            <li class="d-flex align-items-center pe-3 "
                                                style="border-radius: 5px; height: 40px;"><select name="" id="" class=""
                                                    style="width: 53px;">
                                                    <option value="">1</option>
                                                    <option value="">2</option>
                                                    <option value="">3</option>
                                                    <option value="" selected>5</option>
                                                </select></li>
                                            <li class="d-flex align-items-center pe-3">showing 1-5 of 30</li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <span class="sr-only"><img
                                                            src="pizzashop_images/images/icons/icons8-left-50.png"
                                                            alt=""
                                                            style="color: black; border: 1px solid black;"></span>
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <span class="sr-only"><img
                                                            src="pizzashop_images/images/icons/icons8-right-50.png"
                                                            alt=""></span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                        aria-labelledby="v-pills-profile-tab">
                        hhhh
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                        aria-labelledby="v-pills-messages-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-settings-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-salad-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-dips-tab">
                        ...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-pizza-tab">...</div>
                    <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                        aria-labelledby="v-pills-desert-tab">...</div>
                
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                hhh</div>
        </div>
    </div>
    </div>
    <script src="bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/dashboard.js"></script>
    <script>
        function toggleIconPosition(condition) {
            var containers = document.querySelectorAll('.search-container');
            containers.forEach(function (container) {
                container.classList.remove('left-icon', 'right-icon');
                if (condition === 'left') {
                    container.classList.add('left-icon');
                } else if (condition === 'right') {
                    container.classList.add('right-icon');
                }
            });
        }
        function toggleTabs() {
            var tabElement = document.getElementById("myTab");
            var pills = document.getElementById("v-pills-tab")
            if (tabElement.style.display === "none" || tabElement.style.display === "") {
                tabElement.style.display = "block";
            } else {
                tabElement.style.display = "none";
            }
            if (pills.style.display === "none" || pills.style.display === "") {
                pills.style.display = "block";
            } else {
                pills.style.display = "none";
            }
        }
    </script>
</body>

</html>
