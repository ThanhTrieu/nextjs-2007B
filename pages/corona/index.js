import { Row, Col } from 'antd'
export default function CoronaVirus({ data }){
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <h1 style={{ textAlign: 'center' }}>Thong tin dich benh Corona</h1>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <p>So ca moi nhiem benh: {data.Global.NewConfirmed.toLocaleString()}</p>
          <p>Tong nguoi da nhiem benh: {data.Global.TotalConfirmed.toLocaleString()}</p>
        </Col>
        <Col span={8}>
          <p>So ca moi tu vong: {data.Global.NewDeaths.toLocaleString()}</p>
          <p>Tong nguoi da chet: {data.Global.TotalDeaths.toLocaleString()}</p>
        </Col>
        <Col span={8}>
          <p>So ca moi khoi benh: {data.Global.NewRecovered.toLocaleString()}</p>
          <p>Tong nguoi da khoi: {data.Global.TotalRecovered.toLocaleString()}</p>
        </Col>
      </Row>

      <h2>Danh sach cac nuoc</h2>
      <table width="100%" border="1" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <th>Quoc gia</th>
              <th>Moi nhiem</th>
              <th>Tong ca nhiem</th>
              <th>Moi chet</th>
              <th>Tong ca chet</th>
              <th>Moi khoi</th>
              <th>Tong ca khoi benh</th>
            </tr>
          </thead>
          <tbody>
            {data.Countries.map((item, index) => (
              <tr key={index}>
                <td>{item.Country}</td>
                <td>{item.NewConfirmed.toLocaleString()}</td>
                <td>{item.TotalConfirmed.toLocaleString()}</td>
                <td>{item.NewDeaths.toLocaleString()}</td>
                <td>{item.TotalDeaths.toLocaleString()}</td>
                <td>{item.NewRecovered.toLocaleString()}</td>
                <td>{item.TotalRecovered.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </>
  )
}

export async function getStaticProps(){
  const result = await fetch(`https://api.covid19api.com/summary`)
  const data = await result.json()
  return {
    props: {
      data
    }
  }
}