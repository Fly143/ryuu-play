import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class VolcaronaGX_252 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larvesta";
  public hp: number = 210;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flaming Shot", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, put 2 damage counters on 1 of your opponent's Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Backfire", cost: [], damage: "160", text: "Put 2 Fire Energy attached to this Pokémon into your hand." },
      { name: "Massive Heat Wave-GX", cost: [], damage: "", text: "Discard an Energy from each of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "CEC";
  public name: string = "Volcarona-GX";
  public fullName: string = "Volcarona-GX CEC 252";
  public text: string = "Volcarona-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    return state;
  }
}
