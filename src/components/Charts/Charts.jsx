import './Charts.css';

import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';


function Charts(){

    const checklist = JSON.parse(localStorage.getItem("checklist"));

    const itensConcluidos = checklist
    ? Object.values(checklist.status).filter(
        (item) => item === "Concluído"
    ).length
    : 0;

    const itensPendentes = 4 - itensConcluidos;

    const data = [
    {
        name: "Concluídos",
        valor: itensConcluidos
    },
    {
        name: "Pendentes",
        valor: itensPendentes
    }
];

    const concentrationData = [
        {
            horario: '08h',
            concentracao: 42
        },
        {
            horario: '12h',
            concentracao: 43
        },
        {
            horario: '14h',
            concentracao: 41
        },
        {
            horario: '16h',
            concentracao: 44
        }
    ];


    const consumptionData = [
        {
            horario: '08h',
            consumo: 20
        },
        {
            horario: '12h',
            consumo: 35
        },
        {
            horario: '14h',
            consumo: 48
        },
        {
            horario: '16h',
            consumo: 60
        }
    ];


    return (

        <>

            <div className="chart">

                <h3>
                    Concentração do Talco
                </h3>

                <ResponsiveContainer width="100%" height={300}>

                    <LineChart data={concentrationData}>

                        <CartesianGrid />

                        <XAxis dataKey="horario" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="concentracao"
                            stroke="#0f3d75"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>



            <div className="chart">

                <h3>
                    Consumo de Talco
                </h3>


                <ResponsiveContainer width="100%" height={300}>

                    <LineChart data={consumptionData}>

                        <CartesianGrid />

                        <XAxis dataKey="horario" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="consumo"
                            stroke="#144b8c"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>



            </div>


        </>

    );

}


export default Charts;