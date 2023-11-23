import CardProduct from "../../common/ui/cardPro";
import { Boundary } from "../../common/ui/boundary";
import TotalView from "../../common/ui/totalView";
export default OrderDetail = ({ navigation }) => {
  return (
    <Boundary title={"OrderDetail"}>
      <CardProduct />
      <TotalView />
    </Boundary>
  );
};
