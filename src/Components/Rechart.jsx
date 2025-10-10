import Container from "../Container/Container";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, } from "recharts";

const Rechart = ({ reChartInfo }) => {
    return (
        <div>
            <Container>
                <div className="py-6">
                    <div className="w-full h-64 bg-gray-50 p-4 rounded-xl shadow pb-8">
                        <h2 className="font-semibold mb-4">Ratings</h2>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={reChartInfo}
                                layout="vertical"
                                margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                            >
                                <CartesianGrid horizontal={false} strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tick={{ fontSize: 12 }}
                                    width={70}
                                />
                                <Tooltip />
                                <Bar dataKey="count" fill="#ff9100" radius={[0, 6, 6, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Rechart;