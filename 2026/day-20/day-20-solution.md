# Day 20 – Bash Scripting Challenge: Log Analyzer and Report Generator


## Challenge Tasks

### Task 1: Input and Validation
Your script should:
1. Accept the path to a log file as a command-line argument
2. Exit with a clear error message if no argument is provided
3. Exit with a clear error message if the file doesn't exist

   [Script](scripts/input_valid.sh)

   ![s1](ss/s1.png)
   


---

### Task 2: Error Count
1. Count the total number of lines containing the keyword `ERROR` or `Failed`
2. Print the total error count to the console

   [Script](scripts/error_count.sh)

   ![s2](ss/s2.png)
   

---

### Task 3: Critical Events
1. Search for lines containing the keyword `CRITICAL`
2. Print those lines along with their line number


   [Script](scripts/critical.sh)

   ![s3](ss/s3.png)
   

---

### Task 4: Top Error Messages
1. Extract all lines containing `ERROR`
2. Identify the **top 5 most common** error messages
3. Display them with their occurrence count, sorted in descending order

   [Script](scripts/top_error.sh)
   
   ![s4](ss/s4.png)

---

### Task 5: Summary Report
Generate a summary report to a text file named `log_report_<date>.txt` (e.g., `log_report_2026-02-11.txt`). The report should include:
1. Date of analysis
2. Log file name
3. Total lines processed
4. Total error count
5. Top 5 error messages with their occurrence count
6. List of critical events with line numbers


### Task 6 (Optional): Archive Processed Logs
Add a feature to:
1. Create an `archive/` directory if it doesn't exist
2. Move the processed log file into `archive/` after analysis
3. Print a confirmation message


   [Script](scripts/log_analyzer_report.sh)
   
   
   ![s5](ss/s5.png)


---


## What I Learned

- How to validate user input in Bash scripts.
- How to search and filter log files using `grep`.
- How to count occurrences using `wc`, `sort`, and `uniq`.
- How to extract and analyze log data using `awk`.
- How to generate structured reports automatically.
- How to archive processed log files for better organization.
- How to combine multiple Bash scripts into a complete log analysis workflow.

---

## Commands Used

- `grep` – Locate ERROR and CRITICAL events in log files.
- `awk` – Parse log entries and extract meaningful information.
- `sort` – Organize data for accurate counting and reporting.
- `uniq` – Identify and count repeated error messages.
- `wc` – Calculate total lines and event counts.
- `head` – Limit output to the top 5 error messages.
- `mkdir` – Create the archive directory when needed.
- `mv` – Archive processed log files after analysis.
- `date` – Record analysis time and generate report names.