import React from "react";
import "./Finances.scss";
export default function Finances() {
    return (
        <div className="finances">
            <header>
                    <h4>Finances</h4>
                </header>
            <table>
                <thead>
                    <th>Month</th>
                    <th>Gross</th>
                    <th>Percentage</th>
                </thead>
                <tbody>
                    <tr>
                        <td>December</td>
                        <td>$2000</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>November</td>
                        <td>$5000</td>
                        <td>20%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
