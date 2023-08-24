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
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class PostAdTest {
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
  public void postAd() {
    driver.get("http://localhost:3000//");
    driver.manage().window().setSize(new Dimension(1054, 800));
    driver.findElement(By.cssSelector("a:nth-child(3) > .MuiButtonBase-root")).click();
    driver.findElement(By.id("mui-1")).click();
    driver.findElement(By.id("mui-1")).sendKeys("test product6");
    driver.findElement(By.id("mui-2")).click();
    driver.findElement(By.id("mui-2")).sendKeys("test description");
    driver.findElement(By.id("mui-3")).click();
    driver.findElement(By.id("mui-3")).sendKeys("120");
    driver.findElement(By.id("mui-4")).click();
    driver.findElement(By.id("mui-4")).sendKeys("200");
    driver.findElement(By.id("mui-5")).click();
    driver.findElement(By.id("mui-5")).sendKeys("nothing");
    {
      WebElement element = driver.findElement(By.cssSelector(".MuiButton-contained"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    driver.findElement(By.cssSelector(".MuiButton-contained")).click();
    {
      WebElement element = driver.findElement(By.cssSelector(".product__container:nth-child(5) .MuiTypography-root:nth-child(3)"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element).perform();
    }
    {
      WebElement element = driver.findElement(By.tagName("body"));
      Actions builder = new Actions(driver);
      builder.moveToElement(element, 0, 0).perform();
    }
  }
}
