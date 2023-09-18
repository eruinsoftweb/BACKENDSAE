const getMenuFrontEnd = (role, modalidad) => {
    const menu = [
        {
            titulo: 'Inicio',
            icono: 'RiHome5Fill',
            path: '/'
        },
    ];

    if (role === 'ADMIN_ROLE') {
        switch (modalidad) {
            case 'CEBA':
                menu.push(
                    {
                        titulo: 'Usuarios',
                        icono: 'FaUsers',
                        path: '/usuarios'
                    },

                    {
                        titulo: 'Grados',
                        icono: 'MdGrade',
                        path: '/grados'
                    },
                    {
                        titulo: 'Estudiantes',
                        icono: 'RiUserStarFill',
                        path: '/ceba/estudiantes'
                    },
                    {
                        titulo: 'Pagos',
                        icono: 'MdMonetizationOn',
                        path: '/ceba/pagos'
                    },
                    {
                        titulo: 'Reportes',
                        icono: 'FaChartPie',
                        path: '/ceba/reportes'
                    }
                );
                break;
            case 'RESIDENCIA':
                menu.push(
                    {
                        titulo: 'Usuarios',
                        icono: 'FaUsers',
                        path: '/usuarios'
                    },

                    {
                        titulo: 'Grados',
                        icono: 'MdGrade',
                        path: '/grados'
                    },
                    {
                        titulo: 'Estudiantes',
                        icono: 'RiUserStarFill',
                        path: '/residencia/estudiantes'
                    },
                    {
                        titulo: 'Pagos',
                        icono: 'MdMonetizationOn',
                        path: '/residencia/pagos'
                    },
                    {
                        titulo: 'Reportes',
                        icono: 'FaChartPie',
                        path: '/residencia/reportes'
                    }
                );
                break;
            case 'EBR':
                menu.push(
                    {
                        titulo: 'Usuarios',
                        icono: 'FaUsers',
                        path: '/usuarios'
                    },

                    {
                        titulo: 'Grados',
                        icono: 'MdGrade',
                        path: '/grados'
                    },
                    {
                        titulo: 'Estudiantes',
                        icono: 'RiUserStarFill',
                        path: '/ebr/estudiantes'
                    },
                    {
                        titulo: 'Pagos',
                        icono: 'MdMonetizationOn',
                        path: '/ebr/pagos'
                    },
                    {
                        titulo: 'Docentes',
                        icono: 'FaChalkboardTeacher',
                        path: '/ebr/docentes'
                    },
                    {
                        titulo: 'Equipos',
                        icono: 'RiComputerFill',
                        path: '/ebr/equipos'
                    },
                    {
                        titulo: 'Libros',
                        icono: 'RiBook3Fill',
                        path: '/ebr/libros'
                    },
                    {
                        titulo: 'Inmobiliarios',
                        icono: 'MdTableChart',
                        path: '/ebr/inmobiliarios'
                    },
                    {
                        titulo: 'Uniformes',
                        icono: 'FaVest',
                        path: '/ebr/uniformes'
                    },
                    {
                        titulo: 'Mapas',
                        icono: 'RiMapPin4Fill',
                        path: '/ebr/mapas'
                    },
                    {
                        titulo: 'Laboratorios',
                        icono: 'MdScience',
                        path: '/ebr/laboratorios'
                    },
                    {
                        titulo: 'Reportes',
                        icono: 'FaChartPie',
                        path: '/ebr/reportes'
                    }
                );
                break;
        }
    }

    if (role === 'USER_ROLE') {
        switch (modalidad) {
            case 'CEBA':
                menu.push(
                    {
                        titulo: 'Estudiantes',
                        icono: 'RiUserStarFill',
                        path: '/ceba/estudiantes'
                    },

                    {
                        titulo: 'Grados',
                        icono: 'MdGrade',
                        path: '/grados'
                    },
                    {
                        titulo: 'Pagos',
                        icono: 'MdMonetizationOn',
                        path: '/ceba/pagos'
                    },
                    {
                        titulo: 'Reportes',
                        icono: 'FaChartPie',
                        path: '/ceba/reportes'
                    }
                );
                break;
            case 'RESIDENCIA':
                menu.push(

                    {
                        titulo: 'Grados',
                        icono: 'MdGrade',
                        path: '/grados'
                    },
                    {
                        titulo: 'Estudiantes',
                        icono: 'RiUserStarFill',
                        path: '/residencia/estudiantes'
                    },
                    {
                        titulo: 'Pagos',
                        icono: 'MdMonetizationOn',
                        path: '/residencia/pagos'
                    },
                    {
                        titulo: 'Reportes',
                        icono: 'FaChartPie',
                        path: '/residencia/reportes'
                    }
                );
                break;
            case 'EBR':
                menu.push(

                    {
                        titulo: 'Grados',
                        icono: 'MdGrade',
                        path: '/grados'
                    },
                    {
                        titulo: 'Estudiantes',
                        icono: 'RiUserStarFill',
                        path: '/ebr/estudiantes'
                    },
                    {
                        titulo: 'Pagos',
                        icono: 'MdMonetizationOn',
                        path: '/ebr/pagos'
                    },
                    {
                        titulo: 'Docentes',
                        icono: 'FaChalkboardTeacher',
                        path: '/ebr/docentes'
                    },
                    {
                        titulo: 'Equipos',
                        icono: 'RiComputerFill',
                        path: '/ebr/equipos'
                    },
                    {
                        titulo: 'Libros',
                        icono: 'RiBook3Fill',
                        path: '/ebr/libros'
                    },
                    {
                        titulo: 'Inmobiliarios',
                        icono: 'MdTableChart',
                        path: '/ebr/inmobiliarios'
                    },
                    {
                        titulo: 'Uniformes',
                        icono: 'FaVest',
                        path: '/ebr/uniformes'
                    },
                    {
                        titulo: 'Mapas',
                        icono: 'RiMapPin4Fill',
                        path: '/ebr/mapas'
                    },
                    {
                        titulo: 'Laboratorios',
                        icono: 'MdScience',
                        path: '/ebr/laboratorios'
                    },
                    {
                        titulo: 'Reportes',
                        icono: 'FaChartPie',
                        path: '/ebr/reportes'
                    }
                );
                break;
        }
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}

