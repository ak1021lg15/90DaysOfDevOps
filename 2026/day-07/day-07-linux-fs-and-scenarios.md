# Linux File System Hierarchy & Scenario-Based Practice
## Part 1: Linux File System Hierarchy
## / (Root Directory)
**Contains:** The top-level directory of Linux; all other directories branch from here.

**Observed (`ls -l /`):**
- `bin -> usr/bin`
- `etc/`
- `home/`
- `var/`

**I would use this when** I want to understand the overall system layout or navigate to core directories.
![](screenshot/s1.png)


*Scenario 3: Finding Service Logs*  
```
A developer asks: "Where are the logs for the 'docker' service?"
The service is managed by systemd.
What commands would you use?
```

### Step 1: To confirm service status and see log hints.
```
sudo systemctl status docker
```
![](scenario3/s1.png)

### Step 2: To view recent Docker service logs.
```
sudo journalctl -u docker -n 50
```

![](scenario3/s2.png.png)

### Step 3: To follow logs in real-time.
```
sudo journalctl -u docker -f
```
![](scenario3/s3.png)
