const getMenuFrontEnd = (role, modalidad) => {

    const menu =  [
        {
            titulo: 'Inicio',
            icono : 'RiHome5Fill',
            path: '/'
        },
        {
            titulo: 'Usuarios',
            icono : 'FaUsers',
            path : '/usuarios'
        },
        {
            titulo: 'Grados',
            icono : 'MdGrade',
            path : '/grados'
        },
    ];

    switch (role, modalidad) {
        case 'ADMIN_ROLE', 'CEBA':
            menu.push(
                {
                    titulo: 'Estudiantes',
                    icono : 'RiUserStarFill',
                    path : '/ceba/estudiantes'
                },
                {
                    titulo: 'Pagos',
                    icono : 'MdMonetizationOn',
                    path : '/ceba/pagos'
                },
                {
                    titulo: 'Reportes',
                    icono : 'FaChartPie',
                    path : '/ceba/reportes'
                })
                break;
        case 'ADMIN_ROLE', 'RESIDENCIA':
            menu.push(
                {
                    titulo: 'Estudiantes',
                    icono : 'RiUserStarFill',
                    path : '/residencia/estudiantes'
                }, {
                    titulo: 'Pagos',
                    icono : 'MdMonetizationOn',
                    path : '/residencia/pagos'
                },
                {
                    titulo: 'Reportes',
                    icono : 'FaChartPie',
                    path : '/residencia/reportes'
                })
                break;
        case 'ADMIN_ROLE', 'EBR':
            menu.push(
                {
                    titulo: 'Estudiantes',
                    icono : 'RiUserStarFill',
                    path : '/ebr/estudiantes'
                },
                {
                    titulo: 'Pagos',
                    icono : 'MdMonetizationOn',
                    path : '/ebr/pagos'
                },
                {
                    titulo: 'Docentes',
                    icono : 'FaChalkboardTeacher',
                    path : '/ebr/docentes'
                },
                {
                    titulo: 'Equipos',
                    icono : 'RiComputerFill',
                    path : '/ebr/equipos'
                },
                {
                    titulo: 'Libros',
                    icono : 'RiBook3Fill',
                    path : '/ebr/libros'
                },
                {
                    titulo: 'Inmobiliarios',
                    icono : 'MdTableChart',
                    path : '/ebr/inmobiliarios'
                },
                {
                    titulo: 'Uniformes',
                    icono : 'FaVest',
                    path : '/ebr/uniformes'
                },
                {
                    titulo: 'Mapas',
                    icono : 'RiMapPin4Fill',
                    path : '/ebr/mapas'
                },
                {
                    titulo: 'Laboratorios',
                    icono : 'MdScience',
                    path : '/ebr/laboratorios'
                },
                {
                    titulo: 'Reportes',
                    icono : 'FaChartPie',
                    path : '/ebr/reportes'
                })
                break;
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}