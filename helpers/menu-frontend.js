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
                        titulo: 'Asignaturas',
                        icono: 'FaBook',
                        path: '/asignaturas'  // Asegúrate de que la ruta sea la correcta
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
                        titulo: 'Asignaturas',
                        icono: 'FaBook',
                        path: '/asignaturas'  // Asegúrate de que la ruta sea la correcta
                    },
                    
                    {
                        titulo: 'Docentes',
                        icono: 'FaChalkboardTeacher',
                        path: '/ebr/docentes'
                    },

                );
                break;
        }
    }

    return menu;
}

module.exports = {
    getMenuFrontEnd
}