<?php


require_once "constantes.php";


?><html data-bs-theme="light" lang="en" bs-app-theme="dark"
    style="--highlight-bg: #000; --highlight-color: #fff; --box-highlight: rgba(0,0,0,0.8);">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Teste Montink</title>
    <link rel="stylesheet" href="./assets/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/font-awesome.min.css">
    <link rel="stylesheet" href="./assets/fontawesome-all.min.css">
    <link rel="stylesheet" href="./assets/ionicons.min.css">
    <link rel="stylesheet" href="./assets/line-awesome.min.css">
    <link rel="stylesheet" href="./assets/material-icons.min.css">
    <link rel="stylesheet" href="./assets/simple-line-icons.min.css">
    <link rel="stylesheet" href="./assets/typicons.min.css">
    <link rel="stylesheet" href="./assets/fontawesome5-overrides.min.css" />
    <link rel="stylesheet" href="./assets/style.css" />
</head>

<body id="page-top">
    <div id="wrapper">

        <!-- INICIO NAVBAR -->
        <nav class="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark"
            style="width: 300px !important;">
            <div class="container-fluid d-flex flex-column p-0"><a
                    class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                    <div class="sidebar-brand-icon rotate-n-15"><i class="fas fa-layer-group"></i></div>
                    <div class="sidebar-brand-text mx-3"><span>CAMADAS</span></div>
                </a>
                <hr class="sidebar-divider my-0">
                <ul class="navbar-nav text-light" id="accordionSidebar">
                    <li class="nav-item">
                        <div class="nav-item dropdown" style="padding: 15px;">
                            <a aria-expanded="true" type="button"
                                data-bs-toggle="dropdown" class="dropdown-toggle link-light" href="#">
                                <i class="fas fa-grip-horizontal icon-draggable"></i>
                                Elemento Ordenável 1
                            </a>
                            <div data-bs-popper="none" class="dropdown-menu">
                                <a class="dropdown-item" href="#">Elemento 1</a>
                                <a class="dropdown-item" href="#">Elemento 2</a>
                                <a class="dropdown-item" href="#">Elemento 3</a>
                                <a class="dropdown-item" href="#">Elemento 4</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown" style="padding: 15px;">
                            <a aria-expanded="true"
                                data-bs-toggle="dropdown" class="dropdown-toggle link-light" href="#">
                                <i class="fas fa-grip-horizontal icon-draggable"></i>
                                Elemento Ordenável 2
                            </a>
                            <div data-bs-popper="none" class="dropdown-menu">
                                <a class="dropdown-item" href="#">Lista de Tarefas</a>
                                <a class="dropdown-item" href="#">Grade de Cores</a>
                            </div>
                        </div>                       
					
                        <div class="nav-item" style="padding: 15px;">
                            <button type="button" class="btn btn-success text-light fw-bold" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Modelo de Modal de Componente
                            </button>
                        </div>
                        <div class="nav-item" style="padding: 15px;">
                            <button type="button" class="btn btn-dark col-12 text-light fw-bold">
                                Salvar Layout
                            </button>
                        </div>
                        
                    </li>
                    <li class="nav-item"></li>
                </ul>
                <div class="text-center d-none d-md-inline"></div>
            </div>
        </nav>
        <!--- FIM DA NAVBAR -->


        <!-- <div class="modal-dialog modal-lg">...</div> -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal de Configurações</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <small>
                            Os campos devem ser referentes ao conteúdo dos Elementos
                            editáveis do bloco escolhido.
                        </small>
                        <form class="mt-4">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Subtítulo</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Título</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Classe do Ícone</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp"/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary">Salvar Alterações</button>
                    </div>
                </div>
            </div>
        </div>


        <!-- CONTEUDO PRINCIPAL -->
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav class="navbar navbar-expand bg-white text-center shadow justify-content-center mb-4 topbar">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xxl-12">
                                <form class="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
                                    style="margin-right: 0px;margin-bottom: 0px;text-align: center;margin-left: 37px;">
                                    <div class="input-group"><input type="text"
                                            class="bg-light form-control border-0 small"
                                            placeholder="Buscar Componente"><button class="btn btn-primary py-0"
                                            type="button"><i class="fas fa-search"></i></button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid">

                    <div class="text-start d-sm-flex justify-content-between align-items-center mb-4">
                        <h3 class="text-dark mb-0">Elementos</h3>
                    </div>





                    <!-- ELEMENTO ORDERNÁVEL 1 -->
                    <div class="row">
                        <div class="col-xxl-12">
                            <h1>Elemento Ordenável 1</h1>
                        </div>
						<?php
						foreach($ELEMENTOS['bloco1'] as $elemento){
						
						?>
                        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-left-primary py-2">
                                <div class="card-body">
                                    <div class="row g-0 align-items-center">
                                        <div class="col me-2">
                                            <div class="text-uppercase text-primary fw-bold text-xs mb-1"><span><?php echo $elemento['title']?></span></div>
                                            <div class="text-dark fw-bold h5 mb-0"><span><?php echo number_format($elemento['value'],2,',','.')?></span></div>
                                        </div>
                                        <div class="col-auto"><i class="fas fa-calendar fa-2x text-gray-300"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
						<?php
						}
						?>
						
                       
                    </div>







                    <!-- ELEMENTO ORDENÁVEL 2 -->
                    <div class="row">
                        <div class="col-xxl-12">
                            <h1>Elemento Ordenável 2</h1>
                        </div>
                        <div class="col-lg-6 mb-4">
                            <div class="card shadow mb-4"></div>
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="text-primary fw-bold m-0">Lista de Tarefas</h6>
                                </div>
                                <ul class="list-group list-group-flush">
								<?php
						foreach($ELEMENTOS['bloco2'] as $elemento){
						
						?>
                                    <li class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col me-2">
                                                <h6 class="mb-0"><strong><?php echo $elemento['task']; ?></strong></h6><span
                                                    class="text-xs"><?php echo date('d/m/Y H:i',$elemento['time']); ?></span>
                                            </div>
                                            <div class="col-auto">
                                                <div class="form-check"><input type="checkbox" class="form-check-input"
                                                        id="formCheck-1"><label class="form-check-label"
                                                        for="formCheck-1"></label></div>
                                            </div>
                                        </div>
                                    </li>
						<?php } ?>                                   
                                </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <div class="card text-white bg-primary shadow">
                                        <div class="card-body">
                                            <p class="m-0">Primary</p>
                                            <p class="text-white-50 small m-0">#4e73df</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card text-white bg-success shadow">
                                        <div class="card-body">
                                            <p class="m-0">Success</p>
                                            <p class="text-white-50 small m-0">#1cc88a</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card text-white bg-info shadow">
                                        <div class="card-body">
                                            <p class="m-0">Info</p>
                                            <p class="text-white-50 small m-0">#36b9cc</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card text-white bg-warning shadow">
                                        <div class="card-body">
                                            <p class="m-0">Warning</p>
                                            <p class="text-white-50 small m-0">#f6c23e</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card text-white bg-danger shadow">
                                        <div class="card-body">
                                            <p class="m-0">Danger</p>
                                            <p class="text-white-50 small m-0">#e74a3b</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <div class="card text-white bg-secondary shadow">
                                        <div class="card-body">
                                            <p class="m-0">Secondary</p>
                                            <p class="text-white-50 small m-0">#858796</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                  



                   


                  
                </div>


            </div>
            <footer class="bg-white sticky-footer">
                <div class="container my-auto">
                    <div class="text-center my-auto copyright"><span>Copyright © Meu editor</span></div>
                </div>
            </footer>
        </div>
    </div>

    <script src="./assets/popper.min.js"></script>
    <script src="./assets/bootstrap.min.js"></script>
</body>

</html>