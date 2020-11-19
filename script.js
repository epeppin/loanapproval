$(document).ready(
    function () {
        // validation
        var myRules =
            {
                firstName: {
                    required: true
                },
                lastName: {
                    required: true
                },
                salaryInput: {
                    required: true,
                    min: 0,
                    max: 100000000000,
                    digits: true
                },
                scoreInput: {
                    required: true,
                    min: 300,
                    max: 850,
                    digits: true
                },
                jobInput: {
                    required: true,
                    min: 0,
                    max: 1200,
                    digits: true
                },
                loanInput: {
                    required: true,
                    min: 0,
                    max: 100000,
                    digits: true
                }
            };

        // Object containing the error messages
        var myMessages =
            {
                firstName: {
                    required: "Fist Name Required"
                },
                lastName: {
                    required: "Last Name Required"
                },
                salaryInput: {
                    required: "Salary Required",
                    min: "Salary can not be less than 1",
                    max: "Your not Bill Gates",
                    digits: "Must be a whole number"
                },
                scoreInput: {
                    required: "Credit Score Required",
                    min: "Minimum Credit Score is 300",
                    max: "Maximum Credit Score is 850",
                    digits: "Must be a whole number"
                },
                jobInput: {
                    required: "Months at Job Required",
                    min: "Months at Job must be a positive number",
                    max: "You won't live that long",
                    digits: "Must be a whole number"
                },
                loanInput: {
                    required: "Loan Amount Required",
                    min: "Loan must be positive number",
                    max: "Loan Maximum is $100,000",
                    digits: "Whole dollar amounts only"
                }
            };

        // Pass the configuration to the form's validate() method
        // Needs submitHandler, rules, and messages properties
        $("form").validate(
            {
                submitHandler: runLoanApproval,
                rules: myRules,
                messages: myMessages
            }
        );

        // Run Loan Approval
        function runLoanApproval() {
            //Check Approval Requirements
            var salaryTotal = $("#salaryInput").val()
            var scoreTotal = $("#scoreInput").val()
            var jobTotal = $("#jobInput").val()
            var name = $("#firstName").val() + " " + $("#lastName").val()
            var loanAmount = $("#loanInput").val()

            if ((salaryTotal >= 40000 && scoreTotal >= 600) || (salaryTotal >= 40000 && scoreTotal < 600 && jobTotal > 12)) {
                $("#approvalStatus").text(`Congratulations ${name} your loan for $${loanAmount} has been Approved!`).css("color", "green")
            } else if (salaryTotal < 40000 && scoreTotal >= 600 && jobTotal > 12) {
                $("#approvalStatus").text(`Congratulations ${name} your loan for $${loanAmount} has been Approved!`).css("color", "green")
            } else $("#approvalStatus").text(`We are sorry ${name} your loan for $${loanAmount} has been Denied`).css("color", "darkred")

        }


    }
);