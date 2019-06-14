import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FormElement from "./FormElement";
import '../index.css';

class ZakatCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      // date: "",
      // total_assests: "",
      // nisab_calc: "",
      // zakat_pay: "",
      // zakat_amount: "",
      gold_24_rate: "",
      gold_22_rate: "",
      silver_rate: "",
      gold_24: "",
      gold_22: "",
      gold_other: "",
      precious_stones: "",
      ornaments: "",
      artifact: "",
      household_utensils: "",
      cash_hand: "",
      cash_savings_account: "",
      cash_current_account: "",
      cash_fd: "",
      loans: "",
      investment: "",
      pf: "",
      insurance_premium: "",
      shares: "",
      govt_security_deposits: "",
      investment_chits: "",
      other_wealth: "",
      rent_advance: "",
      landed_prop: "",
      rentals: "",
      saleable_stock: "",
      damaged_stock: "",
      credit_sales: "",
      supplier: "",
      bad_debts: "",
      capital_balance: "",
      loans_advanced: "",
      withdrawals: "",
      profit: "",
      produce_rain: "",
      produce_artificial: "",
      produce_rain_artificial: "",
      animals: "",
      loans_friends: "",
      loans_bank: "",
      income_tax: "",
      raw:{
        gold_24: 0,
        gold_22: 0,
        gold_other: 0,
        precious_stones: 0,
        ornaments: 0,
        artifact: 0,
        household_utensils: 0,
        cash_hand: 0,
        cash_savings_account: 0,
        cash_current_account: 0,
        cash_fd: 0,
        loans: 0,
        investment: 0,
        pf: 0,
        insurance_premium: 0,
        shares: 0,
        govt_security_deposits: 0,
        investment_chits: 0,
        other_wealth: 0,
        rent_advance: 0,
        landed_prop: 0,
        rentals: 0,
        saleable_stock: 0,
        damaged_stock: 0,
        credit_sales: 0,
        supplier: 0,
        bad_debts: 0,
        capital_balance: 0,
        loans_advanced: 0,
        withdrawals: 0,
        profit: 0,
        produce_rain: 0,
        produce_artificial: 0,
        produce_rain_artificial: 0,
        animals: 0,
        loans_friends: 0,
        loans_bank: 0,
        income_tax: 0
      },
      rate:{
        gold_24_rate: 0,
        gold_22_rate: 0,
        silver_rate: 0,
      },
      sums:{
        gold_24: 0,
        gold_22: 0,
        gold_other: 0,
        precious_stones: 0,
        ornaments: 0,
        artifact: 0,
        household_utensils: 0,
        cash_hand: 0,
        cash_savings_account: 0,
        cash_current_account: 0,
        cash_fd: 0,
        loans: 0,
        investment: 0,
        pf: 0,
        insurance_premium: 0,
        shares: 0,
        govt_security_deposits: 0,
        investment_chits: 0,
        other_wealth: 0,
        rent_advance: 0,
        landed_prop: 0,
        rentals: 0,
        saleable_stock: 0,
        damaged_stock: 0,
        credit_sales: 0,
        supplier: 0,
        bad_debts: 0,
        capital_balance: 0,
        loans_advanced: 0,
        withdrawals: 0,
        profit: 0,
        produce_rain: 0,
        produce_artificial: 0,
        produce_rain_artificial: 0,
        animals: 0,
        loans_friends: 0,
        loans_bank: 0,
        income_tax: 0,
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,    
      raw: {
        ...this.state.raw,
          [event.currentTarget.name]: event.currentTarget.value * 1
      }, 
    });
    
    switch(event.currentTarget.name) {
      case 'gold_24':
      case 'gold_other':
        this.setState({
          sums: {
            ...this.state.sums,
              [event.currentTarget.name]: event.currentTarget.value * 0.025 * this.state.gold_24_rate
          },
        });
        break;
      case 'gold_22':
        this.setState({
          sums: {
            ...this.state.sums,
              [event.currentTarget.name]: event.currentTarget.value * 0.025 * this.state.gold_22_rate
          },
        });
        break;
      
      case 'ornaments':
      case 'artifact':
        this.setState({
          sums: {
            ...this.state.sums,
              [event.currentTarget.name]: event.currentTarget.value * 0.025 * this.state.silver_rate
          },
        });
        break;
      case 'household_utensils':
          this.setState({
            sums: {
              ...this.state.sums,
                [event.currentTarget.name]: event.currentTarget.value * 0.9 * 0.025 * this.state.silver_rate
            },
          });
          break;
      case 'produce_rain':
          this.setState({
            sums: {
              ...this.state.sums,
                [event.currentTarget.name]: event.currentTarget.value * 0.1
            },
          });
          break;
      case 'produce_artificial':
          this.setState({
            sums: {
              ...this.state.sums,
                [event.currentTarget.name]: event.currentTarget.value * 0.05
            },
          });
          break;  
      case 'produce_rain_artificial':
        this.setState({
          sums: {
            ...this.state.sums,
              [event.currentTarget.name]: event.currentTarget.value * 0.075
          },
        });
        break;       
      case 'supplier':
      case 'withdrawals':
      case 'bad_debts':
      case 'loans_friends':
      case 'loans_bank':
      case 'income_tax':    
        this.setState({
          sums: {
            ...this.state.sums,
              [event.currentTarget.name]: event.currentTarget.value * -0.025
          },
        });
        break; 
      case 'gold_24_rate':
      case 'gold_22_rate':    
        this.setState({
          rate: {
            ...this.state.rate,
              [event.currentTarget.name]: event.currentTarget.value * 8
          },
        });
        break;
      case 'silver_rate':    
        this.setState({
          rate: {
            ...this.state.rate,
              [event.currentTarget.name]: event.currentTarget.value 
          },
        });
        break;            
      default:
        this.setState({
          sums: {
            ...this.state.sums, 
              [event.currentTarget.name]: event.currentTarget.value * 0.025
          },
        })
    } 
  }

  // payableZakat= () =>

  calculate = (obj) =>
    Object.keys(obj).reduce(
      (sum,key) => sum+obj[key],
      0
    )
  
  formatINR = (amount) => {
    return amount.toLocaleString('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
  };

  render() {
    const intro = [
      {
        title: "Intro",
        rows: [
          {
            name: "date",
            label: "My zakat calculation date",
            placeholder: "dd-mmm-yyyy",
            type: "date"
          },
          {
            name: "total_assests",
            label: "My total assests that were idle for last 1 year (in Rs)",
            placeholder: "₹0.00",
            type: "number"
          },
          {
            name: "nisab_calc",
            label: "Nisab Calculation Method You Prefer",
            placeholder: "Gold",
            type: "text",
            as: "select"
          },
          {
            name: "zakat_pay",
            label: "Am I obligated to pay Zakat? (Crossed Nisab Level?)",
            placeholder: "No",
            type: "text"
          },
          {
            name: "zakat_amount",
            label: "My zakat amount to pay",
            placeholder: "₹0.00",
            type: "number"
          }
        ]
      }
    ];
    const rows_rates = [
      {
        title: "Today's gold and silver rate (click here to get today's rate)",
        rows: [
          {
            name: "gold_24_rate",
            label: "Today's gold rate in chennai for 24 carat",
            placeholder: "₹0.00/gram",
            type: "number",
            zakatpay: 8
          },
          {
            name: "gold_22_rate",
            label: "Today's gold rate in chennai for 22 carat",
            placeholder: "₹0.00/gram",
            type: "number",
            zakatpay: 8
          },
          {
            name: "silver_rate",
            label: "Today's silver rate in chennai for 1 gram",
            placeholder: "₹0.00/gram",
            type: "number",
            zakatpay: 1
          }
        ]
      }]
    const rows = [
        {
        title: "Zakat on Gold",
        rows: [
          {
            name: "gold_24",
            label: "24 Carat Ornaments / Coins / Biscuits",
            placeholder: "0.00 gram",
            type: "number",
            zakatpay: 0.025,
            calc: () => {
              return this.state.gold_24_rate * this.state.gold_24 * 0.025;
            }
          },
          {
            name: "gold_22",
            label: "22 Carat Ornaments / Coins / Biscuits",
            placeholder: "0.00 gram",
            type: "number",
            calc: () => {
              return this.state.gold_22_rate * this.state.gold_22 * 0.025;
            },
            zakatpay: 0.025
          },
          {
            name: "gold_other",
            label: "Other Gold Valuables",
            placeholder: "0.00 gram",
            type: "number",
            calc: () => {
              return this.state.gold_22_rate * this.state.gold_other * 0.025;
            },
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "Zakat on Precious Stones",
        rows: [
          {
            name: "precious_stones",
            label:
              "Calculate the nett Market Value of the Precious Stones like Diamonds, Rubies, etc. and add them to the Estimated Value Column",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "Zakat on Silver",
        rows: [
          {
            name: "ornaments",
            label: "Ornaments",
            placeholder: "0.00 gram",
            type: "number",
            zakatpay: 0.025,
            calc: () => {
              return this.state.ornaments * this.state.silver_rate * 0.025;
            }
          },
          {
            name: "artifact",
            label: "Artifact",
            placeholder: "0.00 gram",
            type: "number",
            zakatpay: 0.025,
            calc: () => {
              return this.state.artifact * this.state.silver_rate * 0.025;
            }
          },
          {
            name: "household_utensils",
            label: "Household Utensils",
            placeholder: "0.00 gram",
            type: "number",
            zakatpay: 0.025,
            calc: () => {
              return (
                this.state.household_utensils *
                this.state.silver_rate *
                0.025 *
                0.9
              );
            }
          }
        ]
      },
      {
        title: "Zakat on cash in hand/bank",
        rows: [
          {
            name: "cash_hand",
            label: "Cash in Hand",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "cash_savings_account",
            label: "Cash in Bank in Savings Accounts",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "cash_current_account",
            label: "Cash in Bank in Current Accounts",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "cash_fd",
            label: "Cash held in Fixed Deposits",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "Zakat on loans / investments/ funds/ shares, etc",
        rows: [
          {
            name: "loans",
            label: "Loans Receivable from Friends and Relatives",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "investment",
            label: "Investment in Govt Bonds",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "pf",
            label: "Provident Fund Contribution to date",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "insurance_premium",
            label: "Insurance Premiums including bonus up to date",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "shares",
            label: "Value of Shares (stocks) including Dividends",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "govt_security_deposits",
            label: "Government Security Deposits, ADRs, etc",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "investment_chits",
            label: "Investment in Private Chits, Funds, etc",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "other_wealth",
            label: "Other Sources of Wealth",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "rent_advance",
            label: "Rent Advance",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "Zakat on landed property",
        rows: [
          {
            name: "landed_prop",
            label: "Landed Property held as an Investment / Business",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "rentals",
            label:
              "Zakat on Rentals Coming from Property (After Deducting for all expenses)",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "Zakat on business",
        rows: [
          {
            name: "saleable_stock",
            label: "Value of Saleable Stock",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "damaged_stock",
            label: "Value of Damaged / Dead Stock",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "credit_sales",
            label: "Amount Receivable from Credit Sales",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "supplier",
            label:
              "LESS: Amount Payable to Suppliers (Credit taken from suppliers for stocking goods)",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: -0.025
          },
          {
            name: "bad_debts",
            label: "LESS: Bad Debts",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: -0.025
          }
        ]
      },
      {
        title: "Zakat on share on partnership firms",
        rows: [
          {
            name: "capital_balance",
            label: "Capital Balance as per Last balance Sheet ",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "loans_advanced",
            label: "Loans Advanced by you to the Firm as of Date",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          },
          {
            name: "withdrawals",
            label: "LESS:  Withdrawals made by you during the current Year.",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: -0.025
          },
          {
            name: "profit",
            label:
              "Accumulated Profit from the date of Balance Sheet to this Date ",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "Zakat on agricultural produce (10%, 7.5%, 5%)",
        rows: [
          {
            name: "produce_rain",
            label: "Produce Dependent on Rain Water",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.1
          },
          {
            name: "produce_artificial",
            label:
              "Produce totally dependent on Artificial Irrigation like Canal, Tank, Borewell, etc.",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.05
          },
          {
            name: "produce_rain_artificial",
            label:
              "Produce dependent Partially on Rain Water and Partially on Artificial Irrigation",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.075
          }
        ]
      },
      {
        title: "Zakat on animal, poultry and fish farming",
        rows: [
          {
            name: "animals",
            label: "Animals / Birds more than 6 months Old (Total Value)",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: 0.025
          }
        ]
      },
      {
        title: "General liabilities",
        rows: [
          {
            name: "loans_friends",
            label: "LESS: Loans taken from from Friends / Relatives",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: -0.025
          },
          {
            name: "loans_bank",
            label: "LESS: Loans Taken from Banks / Institutions",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: -0.025
          },
          {
            name: "income_tax",
            label: "LESS: Income Tax / Wealth Tax Payable",
            placeholder: "₹0.00",
            type: "number",
            zakatpay: -0.025
          }
        ]
      }
    ];
    return (
      <Container style={{ maxWidth: "800px" }}>
        <Row>
          <Col>
            <Form>
              <div className={"sticky"}>
              
              <Form.Group as={Row}>
                <Form.Label column sm="8">
                  {intro[0].rows[0].label}
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id={intro[0].rows[0].name}
                    type={intro[0].rows[0].type}
                    placeholder={intro[0].rows[0].placeholder}
                    name={intro[0].rows[0].name}
                    value={this.state[intro[0].rows[0].name]}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row}>
                <Form.Label column sm="8">
                  {intro[0].rows[1].label}
                </Form.Label>
                <Col sm="4">
                  {/* <Form.Control
                    step="0.01"
                    id={intro[0].rows[1].name}
                    type={intro[0].rows[1].type}
                    placeholder={intro[0].rows[1].placeholder}
                    name={intro[0].rows[1].name}
                    value={this.formatINR(this.calculate(this.state.raw))}
                  /> */}
                  <div>{this.formatINR(this.calculate(this.state.raw))}</div>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="8">
                  {intro[0].rows[2].label}
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    as="select"
                    id={intro[0].rows[2].name}
                    type={intro[0].rows[2].type}
                    placeholder={intro[0].rows[2].placeholder}
                    name={intro[0].rows[2].name}
                    value={this.state[intro[0].rows[2].name]}
                    onChange={this.handleChange}
                  >
                    <option>Gold</option>
                    <option>Silver</option>
                  </Form.Control>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="8">
                  {intro[0].rows[3].label}
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id={intro[0].rows[3].name}
                    type={intro[0].rows[3].type}
                    placeholder={intro[0].rows[3].placeholder}
                    name={intro[0].rows[3].name}
                    value={this.state[intro[0].rows[3].name]}
                    onChange={this.handleChange}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm="8">
                  {intro[0].rows[4].label}
                </Form.Label>
                <Col sm="4">
                  <Form.Control
                    id={intro[0].rows[4].name}
                    type={intro[0].rows[4].type}
                    placeholder={intro[0].rows[4].placeholder}
                    name={intro[0].rows[4].name}
                    value={this.state[intro[0].rows[4].name]}
                    onChange={this.handleChange}
                    step="0.01"
                  />
                </Col>
              </Form.Group>
              </div>
              <br/>
              {rows_rates.map(({ title, rows }, idx) => {
                return (
                  <>
                    <h3 key={idx}>{title}</h3>
                    <hr key={"hr." + idx} />
                    {rows.map((row, idy) => {

                        return (
                          <FormElement
                            key={`${idx}.${idy}`}
                            step="0.01"
                            type={row.type}
                            name={row.name}
                            placeholder={row.placeholder}
                            // value={this.state[row.value]}
                            value={this.state[row.name]}
                            onChange={this.handleChange}
                            payable={this.formatINR(this.state.rate[row.name])}
                          >
                            {row.label}
                          </FormElement>
                        );
                      }
                  )}
                  </>
                );
              })}

              {rows.map(({ title, rows }, idx) => {
                return (
                  <>
                    <h3 key={idx}>{title}</h3>
                    <hr key={"hr." + idx} />
                    {rows.map((row, idy) => {    
                        return (
                          <FormElement
                            key={`${idx}.${idy}`}
                            step="0.01"
                            type={row.type}
                            name={row.name}
                            placeholder={row.placeholder}
                            // value={this.state[row.value]}
                            value={this.state[row.name]}
                            onChange={this.handleChange}
                            payable={this.formatINR(this.state.sums[row.name])}
                          >
                            {row.label}
                          </FormElement>
                        );
                    })}
                  </>
                );
              })}
              {/* <Button block variant="primary" type="submit">
                Submit
              </Button>
              <br /> */}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm="6"></Col>
          <Col sm="4"><b>Total</b></Col>
          <Col sm="2">{this.formatINR(this.calculate(this.state.sums))}</Col>
              
        </Row>
        <br/>
      </Container>
    );
  }
}

export default ZakatCalculator;
