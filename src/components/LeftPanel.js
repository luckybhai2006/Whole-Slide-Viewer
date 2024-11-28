import React from "react";

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2>Details</h2>

      {/* RBC Table */}
      <h3>RBC</h3>
      <table>
        <thead>
          <tr>
            <th>RBC</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Angled Cells</td>
            <td>222</td>
            <td>67%</td>
          </tr>
          <tr>
            <td>Borderline Ovalocytes</td>
            <td>50</td>
            <td>20%</td>
          </tr>
        </tbody>
      </table>

      {/* WBC Table */}
      <h3>WBC</h3>
      <table>
        <thead>
          <tr>
            <th>WBC</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lymphocytes</td>
            <td>1500</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Monocytes</td>
            <td>500</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>Eosinophils</td>
            <td>200</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>Basophils</td>
            <td>100</td>
            <td>2%</td>
          </tr>
        </tbody>
      </table>

      {/* Platelets Table */}
      <h3>Platelets</h3>
      <table>
        <thead>
          <tr>
            <th>Platelets</th>
            <th>Count</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Platelet Count</td>
            <td>250,000</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Thrombocytes</td>
            <td>200,000</td>
            <td>80%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeftPanel;
