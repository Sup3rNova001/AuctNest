// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;-
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class RegisterTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new ChromeDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void register() {
    driver.get("http://localhost:3000//login");
    driver.manage().window().setSize(new Dimension(1552, 832));
    driver.findElement(By.id("mui-1")).click();
    driver.findElement(By.cssSelector(".auth__container")).click();
    driver.findElement(By.linkText("Sign Up")).click();
    driver.findElement(By.id("mui-3")).click();
    driver.findElement(By.id("mui-3")).sendKeys("amandalal_001");
    driver.findElement(By.id("mui-4")).click();
    driver.findElement(By.id("mui-4")).sendKeys("aman2002dalal@outlook.com");
    driver.findElement(By.id("mui-5")).click();
    driver.findElement(By.id("mui-5")).sendKeys("House No. 217 , Arjun Nagar, Kabri Road ,Panipat");
    driver.findElement(By.id("mui-6")).click();
    driver.findElement(By.id("mui-6")).sendKeys("+918295023578");
    driver.findElement(By.id("mui-7")).click();
    driver.findElement(By.id("mui-7")).sendKeys("aman123");
    driver.findElement(By.id("mui-8")).click();
    driver.findElement(By.id("mui-8")).sendKeys("aman123");
    driver.findElement(By.id("mui-4")).click();
    driver.findElement(By.id("mui-4")).sendKeys("aman2002dalal@outlook.commm");
    driver.findElement(By.cssSelector(".MuiButtonBase-root")).click();
  }
}
