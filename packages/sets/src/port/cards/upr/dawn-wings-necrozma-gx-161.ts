import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class DawnWingsNecrozmaGX_161 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Invasion", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if this Pokémon is on your Bench, you may switch it with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dark Flash", cost: [], damage: "120", text: "This attack's damage isn't affected by Resistance." },
      { name: "Moon's Eclipse-GX", cost: [], damage: "180", text: "You can use this attack only if you have more Prize cards remaining than your opponent. Prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UPR";
  public name: string = "Dawn Wings Necrozma-GX";
  public fullName: string = "Dawn Wings Necrozma-GX UPR 161";
  public text: string = "Dawn Wings Necrozma-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
